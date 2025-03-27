import os
import geojson
import glob
collection = []
for f in glob.glob("Incendios/*.geojson"):
    with open(f, "rb") as infile:
        print(infile.get("type"))
        print(infile['features'])
        layer = geojson.load(infile)
        collection.append(layer)
geo_collection = geojson.FeatureCollection(collection)
with open("Incendios_f/merged_file.geojson", "w", encoding="utf8") as outfile:
    geojson.dump(geo_collection, outfile, indent=4)
