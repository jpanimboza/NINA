import json
import glob
result = []
for f in glob.glob("Incendios/*.geojson"):
    print(f)
    with open(f, "r") as infile:
        result.append(json.load(infile))
with open("Incendios/merged_file.geojson", "w", encoding="utf8") as outfile:
    json.dump(result, outfile)
