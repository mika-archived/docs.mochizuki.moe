#!/bin/bash
set -euo pipefail

export LC_ALL=C.UTF-8
export LANG=C.UTF-8

LANG=(en-us ja-jp)
ROOT=$PWD

for lang in ${LANG[@]}; do
  cd "$ROOT/$lang"
  mkdocs build
  mkdir -p "$ROOT/site/$lang"
  cp -r "./site/*" "../site/$lang"
done

echo "Build Done"
