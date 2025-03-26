import json
import glob
result = []
print(glob.glob("Incendios/*.geojson"))
for f in glob.glob("Incendios/*.geojson"):
    print(f)
    with open(f, "r") as infile:
        result.append(json.load(infile))
with open("merged_file.json", "wb") as outfile:
    json.dump(result, outfile)
