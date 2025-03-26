import json
import glob
result = []
for f in glob.glob("Incendios/*.geojson"):
    with open(f, "r") as infile:
        result.append(json.load(infile))
with open("Incendios_f/merged_file.geojson", "w", encoding="utf8") as outfile:
    json.dump(result, outfile)
for f in glob.glob("Incendios_f/*.geojson"):
    with open(f, "r") as infile:
        print(f)
