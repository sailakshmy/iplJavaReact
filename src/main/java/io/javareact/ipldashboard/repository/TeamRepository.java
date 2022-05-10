package io.javareact.ipldashboard.repository;

import org.springframework.data.repository.CrudRepository;

import io.javareact.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {

    Team findByTeamName(String teamName);

}
