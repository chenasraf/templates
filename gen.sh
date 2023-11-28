#!/usr/bin/env bash

conf="$1"
shift
if [[ "$#" -ne 0 ]]; then
  sub_conf="$1"
  shift
fi

pnpm run simple-scaffold -c "$conf.js" -k "${sub_conf:-default}" "$@"
