#!/bin/bash
mkdir -p upload

# Breisgau-Hochschwarzwald
cp -a configs/config.bh.js config.js
yarn gulp
if [ $? == 0 ]; then
  tar czf upload/bh.tar.gz build
fi

# Emmendingen
cp -a configs/config.ffem.js config.js
yarn gulp
if [ $? == 0 ]; then
  tar czf upload/ffem.tar.gz build
fi

# Freiburg
cp -a configs/config.fffr.js config.js
yarn gulp
if [ $? == 0 ]; then
  tar czf upload/fffr.tar.gz build
fi

# Rheinfelden
cp -a configs/config.rhf.js config.js
yarn gulp
if [ $? == 0 ]; then
  tar czf upload/rhf.tar.gz build
fi

# Hotzenwald
cp -a configs/config.hotz.js config.js
yarn gulp
if [ $? == 0 ]; then
  tar czf upload/hotz.tar.gz build
fi

# Säckingen
cp -a configs/config.saek.js config.js
yarn gulp
if [ $? == 0 ]; then
  tar czf upload/saek.tar.gz build
fi

# Südschwarzwald-West
cp -a configs/config.ssww.js config.js
yarn gulp
if [ $? == 0 ]; then
  tar czf upload/ssww.tar.gz build
fi

# Südschwarzwald-Ost
cp -a configs/config.sswo.js config.js
yarn gulp
if [ $? == 0 ]; then
  tar czf upload/sswo.tar.gz build
fi

# Dreiland
cp -a configs/config.3land.js config.js
yarn gulp
if [ $? == 0 ]; then
  tar czf upload/ff3l-3land.tar.gz build
fi

# Diaspora
cp -a configs/config.diaspora.js config.js
yarn gulp
if [ $? == 0 ]; then
  tar czf upload/diaspora.tar.gz build
fi

# Gesamtkarte
cp -a configs/config.ff3l.js config.js
yarn gulp
if [ $? == 0 ]; then
  tar czf upload/ff3l.tar.gz build
fi

# All
cp -a configs/config.ff3l.js config.js
yarn gulp
if [ $? == 0 ]; then
  tar czf upload/ff3l.tar.gz build
fi

# NG
cp -a configs/config.ffng.js config.js
yarn gulp
if [ $? == 0 ]; then
  tar czf upload/ffng.tar.gz build
fi

# FFTUT
cp -a configs/config.fftut.js config.js
yarn gulp
if [ $? == 0 ]; then
  tar czf upload/fftut.tar.gz build
fi

# Lörrach
cp -a configs/config.loe.js config.js
yarn gulp
if [ $? == 0 ]; then
  tar czf upload/ff3l-loe.tar.gz build
fi

# Nalb
cp -a configs/config.nalb.js config.js
yarn gulp
if [ $? == 0 ]; then
  tar czf upload/ff3l-nalb.tar.gz build
fi

# Ref
cp -a configs/config.ref.js config.js
yarn gulp
if [ $? == 0 ]; then
  tar czf upload/ff3l-ref.tar.gz build
fi

# Wiesental
cp -a configs/config.wiese.js config.js
yarn gulp
if [ $? == 0 ]; then
  tar czf upload/ff3l-wiese.tar.gz build
fi

# WTK
cp -a configs/config.wtk.js config.js
yarn gulp
if [ $? == 0 ]; then
  tar czf upload/ff3l-wtk.tar.gz build
fi

# swb
cp -a configs/config.swb.js config.js
yarn gulp
if [ $? == 0 ]; then
  tar czf upload/ff3l-swb.tar.gz build
fi

git checkout -- config.js
