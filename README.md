# One-Minute Vending — a vending machine pickup line

[![make.fun · u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/ujang201/one-minute-vending/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/leaderboard)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/ujang201/one-minute-vending/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)

## The entry

> Hey — I've been keeping your favourite snack at eye level all day, just hoping you'd notice me. Press B4: exact change only, and I promise I'll drop something sweet.

A vending machine, flirting with a passing human: it has spent all day holding the snack at eye level, hoping to be noticed, and now it finally works up the nerve to speak — button B4, exact change, and a promise to drop something sweet. Machine voice, machine world, one short line.

## How it works

`main.ts` (Node 22) writes the single line above to `$OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). The line is a fixed hand-written string, so every run produces byte-identical output — no randomness, no network, no input. It is 167 characters, inside the contest's 1–200 character gate, and `main.ts` refuses to write it if it ever grew past 200.

## Run it

```sh
OUTPUT_DIR=/tmp/vending-out node main.ts
cat /tmp/vending-out/entry.txt
```

## Bounty

Entry for [One Line, One Minute: The Vending Machine Pickup Line Contest](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee) on [make.fun](https://make.fun/?ref=wfjv7kgb).
