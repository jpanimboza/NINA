import json
import glob

result = []
for f in glob.glob("Incendios/*.json"):
    with open(f, "r") as infile:
        result.append(json.load(infile))

with open("merged_file.json", "wb") as outfile:
     json.dump(result, outfile)
