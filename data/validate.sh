#!/bin/bash
#
# Validates the data files in each subdirectory according to the
# schema file in that directory.

set -e

for schemaFile in */*.schema.json; do
  dataDir=$(dirname "$schemaFile")
  pajv validate -s "$schemaFile" -d "$dataDir/*.toml"
done