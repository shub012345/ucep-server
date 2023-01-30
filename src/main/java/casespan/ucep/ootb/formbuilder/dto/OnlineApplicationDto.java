package casespan.ucep.ootb.formbuilder.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OnlineApplicationDto {
    @Setter @Getter
    private Long applicationId;
    @Setter @Getter
    private String name;
    @Setter @Getter
    private Integer age;
}
