package com.tts.MapsApp.model;

import lombok.Data;
import java.util.List;

@Data
public class GeocodingResponse {
    private List<Geocoding> results;
}