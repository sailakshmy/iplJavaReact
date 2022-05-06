package io.javareact.ipldashboard.data;

import org.slf4j.LoggerFactory;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;

import java.util.HashMap;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.springframework.batch.core.listener.JobExecutionListenerSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import io.javareact.ipldashboard.model.Team;

@Component
public class JobCompletionNotificationListener extends JobExecutionListenerSupport {

    private static final Logger log = LoggerFactory.getLogger(JobCompletionNotificationListener.class);

    // private final JdbcTemplate jdbcTemplate;
    private final EntityManager em;

    @Autowired
    // public JobCompletionNotificationListener(JdbcTemplate jdbcTemplate) {
    public JobCompletionNotificationListener(EntityManager em) {
        // this.jdbcTemplate = jdbcTemplate;
        this.em = em;
    }

    @Override
    @Transactional
    public void afterJob(JobExecution jobExecution) {
        if (jobExecution.getStatus() == BatchStatus.COMPLETED) {
            log.info("Job has been completed. Verify the results.");

            // jdbcTemplate.query("SELECT team1, team2, date FROM match",
            // (rs, row) -> "Team1:- " + rs.getString(1) + " Team2:- " + rs.getString(2)
            // + " Date:- " + rs.getString(3))
            // .forEach(str -> System.out.println(str));

            // To map the distinct team names to a table
            Map<String, Team> teamData = new HashMap<>();

            em.createQuery("Select m.team1, count(*) from Match m group by m.team1", Object[].class)
                    .getResultList()
                    .stream()
                    .map(t -> new Team((String) t[0], (long) t[1]))
                    .forEach(team -> teamData.put(team.getTeamName(), team));

            em.createQuery("Select m.team2, count(*) from Match m group by m.team2", Object[].class)
                    .getResultList()
                    .stream()
                    .forEach(t -> {
                        Team team = teamData.get((String) t[0]);
                        team.setTotalMatches(team.getTotalMatches() + (long) t[1]);
                    });

            em.createQuery("Select m.winningTeam, count(*) from Match m group by m.winningTeam", Object[].class)
                    .getResultList()
                    .stream()
                    .forEach(t -> {
                        Team team = teamData.get((String) t[0]);
                        if (team != null)
                            team.setTotalWins((long) t[1]);
                    });

            teamData.values().forEach(team -> em.persist(team));
            // To check if the team table has been updated.
            teamData.values().forEach(team -> System.out.println(team));
        }
    }
}
