package casespan.ucep.ootb.config;

import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMQConfig {

    public static final String DATA_MAPPER_QUEUE = "data_mapper_queue";
    public static final String DATA_MAPPER_EXCHANGE = "data_mapper_exchange";
    public static final String DATA_MAPPER_ROUTING_KEY = "data_mapper_routingKey";

    @Bean
    public Queue queue(){
        return new Queue(DATA_MAPPER_QUEUE);
    }

    @Bean
    public TopicExchange exchange(){
        return new TopicExchange(DATA_MAPPER_EXCHANGE);
    }

    @Bean
    public Binding binding(Queue queue, TopicExchange exchange){
        return BindingBuilder
                .bind(queue)
                .to(exchange)
                .with(DATA_MAPPER_ROUTING_KEY);
    }

    @Bean
    public MessageConverter messageConverter(){
        return new Jackson2JsonMessageConverter();
    }

    @Bean
    public AmqpTemplate template(ConnectionFactory connectionFactory){
        RabbitTemplate template = new RabbitTemplate(connectionFactory);
        template.setMessageConverter(messageConverter());
        return template;
    }
}
