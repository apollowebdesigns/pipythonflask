package hello;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

/**
 * Created by andrewevans on 28/05/2017.
 */
@CrossOrigin
@RequestMapping(method = RequestMethod.POST)
@RepositoryRestResource(collectionResourceRel = "position", path = "locations")
public interface LocationRepository extends MongoRepository<Position, String> {
    @JsonProperty
    List<Position> findByLongitude(@Param("location") String location);

}
