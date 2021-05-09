#!/bin/bash

LANG=(en-us ja-jp)
ROOT=$PWD

for lang in ${LANG[@]}; do
  cd "$ROOT/$lang"
  mkdocs build
  mkdir -p "../site/$lang"
  cp -r "./site/*" "../site/$lang"
done

echo "Build Done"
