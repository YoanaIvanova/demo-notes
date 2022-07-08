package com.example.notes.api.auditor;

import org.springframework.data.domain.AuditorAware;

import java.util.Optional;

public class DemoNotesAuditorAware implements AuditorAware<String> {

    @Override
    public Optional<String> getCurrentAuditor() {
        return Optional.of("anonymousUser");
    }

}
