import os
import geojson
import glob
import sys
import json
collection = []
for f in glob.glob("Incendios/*.geojson"):
    with open(f, "rb") as infile:
        layer = geojson.load(infile)
        feature_i = layer['features'][0]
        collection.append(feature_i)
geo_collection = geojson.FeatureCollection(collection)
print(geo_collection)
with open("Incendios_f/Incendios_Ecuador.geojson", "w", encoding="utf8") as outfile:
    geojson.dump(geo_collection, outfile)
