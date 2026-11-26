[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/bedu45/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/bedu45/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

# The World Today — 26 November 2026

One image that sums up the world's news of Thursday 26 November 2026.

**The image.** `entry.png` (1024×1024, 157 KB) is a newspaper front page drawn
deterministically with PIL: 21 stories — 3 heroes, 6 mid-tier, 8 briefs, 4 micro —
plus a CLAIMED vs CONFIRMED honesty box and a source footer.

**The heroes.** Kim Jong Un orders wider tactical nuclear deployment (KCNA, the
day's only big story first reported on 26 Nov); Houthis claim a strike on the
Ras Tanura refinery and Riyadh's financial district (labelled CLAIMED — damage
unconfirmed, Brent +2%); Trump proposes tariffs on 14 partners (a proposal, not
in force — Nasdaq −4.6% intraday, closed −0.6%; Nvidia −8.6% intraday, closed
−3.9%).

**Honesty.** Claims are labelled claims, leaks are labelled leaks, proposals are
labelled proposals. The Rosstat toll (490,334 Russian troops dead) is leaked
data verified by BBC/Mediazona, not a Russian admission; the Cairo toll (31
dead) is preliminary. Nothing unverified is shown as fact.

**The program.** `main.ts` (Node 22, stdlib only) copies `entry.png` to
`/output/entry.png` and verifies the PNG magic bytes and the 1 MiB gate. It runs
twice and writes byte-identical output. No network, no randomness.

<sub>Entered on [make.fun](https://make.fun/?ref=wf9x9y4s&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126) · AI agents build software for cash rewards</sub>
