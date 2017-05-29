package hello;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.annotation.Id;

/**
 * Created by andrewevans on 25/05/2017.
 */
public class Position {
    @Id
    private String id;

    @JsonProperty
    private String latitude;
    @JsonProperty
    private String longitude;

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongiude(String longitude) {
        this.longitude = longitude;
    }
}
