package casespan.ucep.ootb.formbuilder.service;

import casespan.ucep.ootb.formbuilder.collection.ApplicationScript;
import casespan.ucep.ootb.formbuilder.dto.ApplicationKey;
import casespan.ucep.ootb.formbuilder.repository.ApplicationScriptRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ApplicationScriptServiceImpl implements ApplicationScriptService {
    @Autowired
    private ApplicationScriptRepo applicationScriptRepo;

    public ApplicationScript saveApplicationScript(ApplicationScript applicationScript){
        applicationScript = applicationScriptRepo.save(applicationScript);
        return applicationScript;
    }

    public Optional<ApplicationScript> readApplication(ApplicationKey applicationKey){
        return applicationScriptRepo.findById(applicationKey.getApplicationName());
    }
}
