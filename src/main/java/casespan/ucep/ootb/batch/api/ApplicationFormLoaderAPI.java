package casespan.ucep.ootb.batch.api;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.JobParameters;
import org.springframework.batch.core.JobParametersBuilder;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/batch")
@CrossOrigin("*")
public class ApplicationFormLoaderAPI {
    @Autowired
    @Qualifier("applicationFormJobLauncher")
    JobLauncher jobLauncher;
    @Autowired
    @Qualifier("loadApplicationFormJob")
    Job job;

    @GetMapping("/loadApplicationFormJob")
    public void loadApplicationFormJob() throws Exception{
        JobParameters jobParameters =
                new JobParametersBuilder()
                        .addLong("time",System.currentTimeMillis()).toJobParameters();
        jobLauncher.run(job, jobParameters);
    }
}
