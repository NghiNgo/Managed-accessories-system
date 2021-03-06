package vn.infodation.intern.group1.mas.repository;

import vn.infodation.intern.group1.mas.domain.ActionLog;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the ActionLog entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ActionLogRepository extends JpaRepository<ActionLog, Long> {
}
