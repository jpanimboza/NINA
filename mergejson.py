import os
import geojson
import glob
import sys
import json
collection = []
for f in glob.glob("Incendios/*.geojson"):
    with open(f, "rb") as infile:
        layer = geojson.load(infile)
        print(layer.get("type"))
        print(layer['features'])
        collection.append(layer)
geo_collection = geojson.FeatureCollection(collection)
with open("Incendios_f/merged_file.geojson", "w", encoding="utf8") as outfile:
    geojson.dump(geo_collection, outfile, indent=4)
