pip install geojson
import os
import geojson
import glob
collection = []
for f in glob.glob("Incendios/*.geojson"):
    with open(file) as infile:
        layer = geojson.load(f)
        collection.append(layer)
geo_collection = geojson.GeometryCollection(collection)
with open("Incendios_f/merged_file.geojson", "w", encoding="utf8") as outfile:
    geojson.dump(geo_collection, outfile)
