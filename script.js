/* =====================================================================
   IMAGE CONFIG — replace the `src` values with your own photos.
   Use local paths (e.g. "images/ridge.jpg") or any URL.
   `c` = collage shape: tall | wide | sq | big | xwide
   ===================================================================== */
const U = (id, w = 1400) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

const IMAGES = {
  hero:    { src: U('1464822759023-fed622ff2c3b', 2200) },
  moment1: { src: U('1469474968028-56623f02e42e', 2200) },
  moment2: { src: 'https://campsites.ph/uploads/images/campsite-194-communal-ranch-5299372021796fc85da192caa604e9cc.jpg',  },
  explore: { src: 'https://campsites.ph/uploads/images/campsite-198-panimahawa-ridge-03532092be2122913c44a3bde6230f64.jpg',  },

  gallery: [
    { src: 'https://scontent.fcgy2-2.fna.fbcdn.net/v/t39.30808-6/830162293_122138856537194216_839128397632845631_n.jpg?stp=dst-jpg_tt6&cstp=mx960x958&ctp=s960x958&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFfxfBD4DavNGOZzrKeO_S05gQianlKUMLmBCJqeUpQwlxtsGHfOuFj97aoVw61EDXAAf3AvPGgemQ8PTEcCOKC&_nc_ohc=Y5gZULnqriIQ7kNvwFn4x0P&_nc_oc=AdosPmiOmgduMDjNiknFFwf0EqmoJNGtiIbvb5jst93ZkiwuyFMozDZs84cWALR5GBU&_nc_zt=23&_nc_ht=scontent.fcgy2-2.fna&_nc_gid=-0tuigG826z8P_OMTwbscg&_nc_ss=7b2a8&oh=00_AQMaMP-sp40so8-1Rcv6dzP673f5zC3y1w2noAvizrODsQ&oe=6AC4556B', c: 'tall',  t: 'THE FIELD',      m: 'EZRA',  alt: 'Hiker walking along a mountain ridge' },
    { src: 'https://scontent.fcgy2-3.fna.fbcdn.net/v/t39.30808-6/830938729_122138856939194216_349584311950380653_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1464&ctp=s1440x1464&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFMUiMoYJInZ8DG5hsH2GqtGENOwKwNzDIYQ07ArA3MMg_unyBO2zQhWtexZBkJ6eYig2AY9R3W8D5Kh1Rfuika&_nc_ohc=sS4KSARi_HgQ7kNvwGZ6mWC&_nc_oc=AdoxdDQeGvUWa_5sYs48IbDx6nElP-pv8oQnbtwuJC_-6iYUfpf80FV1ehzagTOPRZ0&_nc_zt=23&_nc_ht=scontent.fcgy2-3.fna&_nc_gid=1EprFi2lAGpGpHSr96CacQ&_nc_ss=7b2a8&oh=00_AQOPOKxU1tw82cB03lnK9GhFbcQWZ6tLsHDWTq5UtWHebg&oe=6AC43422', c: 'sq', t: 'BACK TO THE MOUNTAINS',     m: 'EZRA',  alt: 'Snow-capped mountain peak' },
    { src: 'https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/829941524_122138858607194216_2004853785969758907_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1464&ctp=s1440x1464&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFnOOHx07W7rQC_Ivn5J-iL9TYQDk81S_f1NhAOTzVL96T9iY-BgcbqGGXPeBKuNfNr3eSA5IaZWBB0V7r68YXV&_nc_ohc=2fwNUA8tVWQQ7kNvwGTpQdU&_nc_oc=AdoRsf-_Z8MKe-KFCkDwNBYOKW5lppPrz4mOIRrEMBGLCVc2tJ7nK97IXJaQCA_c7JE&_nc_zt=23&_nc_ht=scontent.fcgy2-1.fna&_nc_gid=clxK5ksAFvYsubq503EhiQ&_nc_ss=7b2a8&oh=00_AQPrbljjM_lDhWfb3P1o8McpxweAI5EMR5pvPWDvE4AkMA&oe=6AC44C80', c: 'sq', t: 'HIGHLAND SMILE', m: 'EZRA',  alt: 'Sunlight through a green forest' },
    { src: 'https://scontent.fdvo1-1.fna.fbcdn.net/v/t39.30808-6/828532982_122138859765194216_9007944010685493895_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1464&ctp=s1440x1464&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFRrzXoO9UMBpOjmIEPJe4tJhYchqWor1ImFhyGpaivUssYi0slGkcIa4Z7E5fe3hgoMtSlQp1bAJlBuFR_i7jM&_nc_ohc=u0pOq2gr0ukQ7kNvwHOKIab&_nc_oc=Adpg7CwfrW8i0PbtLxEgbzO5oC104pPh9hkqU014rSuTIiLzLxNwAx5S62HOY40eaTk&_nc_zt=23&_nc_ht=scontent.fdvo1-1.fna&_nc_gid=5cfvkPuq-f-nTdI9MGLrgQ&_nc_ss=7b2a8&oh=00_AQMW2HeIeMWDTOMRiLac8sW97C83P6kutMoyQAuy71gelg&oe=6AC44AEB', c: 'wide', t: 'FENCE LINE', m: 'EZRA', alt: 'Mountain range above the clouds' },
    { src: 'https://scontent.fdvo1-2.fna.fbcdn.net/v/t39.30808-6/830997086_122138860005194216_2704822173604286693_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1464&ctp=s1440x1464&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEzb0xEYv7hi2KUYPgkTcJ1OmDiT558UMM6YOJPnnxQw3LvqIhC3sqxrHqyEC0_iNGmOCd3MkUyEzkgyIpfRPmu&_nc_ohc=1U5qTWweh98Q7kNvwHUoMxs&_nc_oc=Adqceh_UgqXAhknxY_rl_vbXhuL0x3W2q9rrZRMf5JSXlekotSM3Bchy7-JGkTQ66jk&_nc_zt=23&_nc_ht=scontent.fdvo1-2.fna&_nc_gid=d5ewci0G8XtWeKgNY538hA&_nc_ss=7b2a8&oh=00_AQOj9rCzA09tq-yEqpyZ0btFOfQuhbf7U7tOI-nYRDh0Hw&oe=6AC444A9', c: 'big', t: 'BEFORE SUNRISE',    m: 'EZRA',  alt: 'Hiker climbing a steep mountain slope' },
    { src: 'https://scontent.fdvo1-1.fna.fbcdn.net/v/t39.30808-6/832818549_122138860359194216_5456793442537684994_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1464&ctp=s1440x1464&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEhZouOii3uKW5ZvJJ2JwvlNfv7bVzZMUQ1-_ttXNkxRAUOuxvc9PVj_KO6T-CQ71stkh1ycJH6iuLZWoOgc8z1&_nc_ohc=ue18O19IzvYQ7kNvwH86xMt&_nc_oc=AdoJzQJUe0_PRBVXRweQ5QIg3A6tcOvCRUpbshWa63ECGhrMIRrr4QBWLfK0wCDsIhQ&_nc_zt=23&_nc_ht=scontent.fdvo1-1.fna&_nc_gid=achksDHQdTxSgaq_xoEIfQ&_nc_ss=7b2a8&oh=00_AQOos2BlP6PX9RsG2P06MWs3b5uXEhTyH1CyAECKFxM28g&oe=6AC45E94', c: 'tall', t: 'PANIMAHAWA RIDGE',   m: 'EZRA', alt: 'Waterfall in a green valley' },
    { src: 'https://scontent.fcgy2-3.fna.fbcdn.net/v/t39.30808-6/830696631_122138861007194216_8977437353858505247_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1464&ctp=s1440x1464&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHjakQQPL48gL31ef9gDovKk-pXWcB_i7aT6ldZwH-LtiDw4XC9irvOB-8iOMmwsGdkSKNwdxa19H5JZiZFLoOt&_nc_ohc=_uY_mU-EjmkQ7kNvwFN_h2x&_nc_oc=Adq9QKkDUAe_gPmo1gzixMV3sXqDBY28h4p5to3nK95pnPTGuqAkuSV_lNdvHVEnnCk&_nc_zt=23&_nc_ht=scontent.fcgy2-3.fna&_nc_gid=GgGUhdSiPVFCPiyHJIzzlg&_nc_ss=7b2a8&oh=00_AQMMVgKsoomQ2Iw-ivfSa58H28-SVdQicWGrPxHMgMiBgA&oe=6AC45522', c: 'sq', t: 'TRAIL BREAK',      m: 'EZRA',  alt: 'Tent glowing under the night sky' },
    { src: 'https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/831424706_122138861613194216_444522584166779110_n.jpg?stp=dst-jpg_tt6&cstp=mx1638x1651&ctp=s1638x1651&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEobQLjD5yIL3wMlDp-gneqj39exdb_0aKPf17F1v_RohjhD0TqjeVm9wHWbfPfU45nL035VH5f7bWqbHFxU0Ke&_nc_ohc=AhKkkCSG3PsQ7kNvwGXfpC3&_nc_oc=Adph7ADE3FDmGnHT7BlWA94DiSdYrLTLWivWIvp11P7m6zyyT64xhVNWor9h3mc3Zxc&_nc_zt=23&_nc_ht=scontent.fcgy2-1.fna&_nc_gid=we-Civ4-tCJ8cOrKuDhMhw&_nc_ss=7b2a8&oh=00_AQMAKL4lezOXLsEonlmPBieF-LkvEGPjw_rXbKgY9rTMxQ&oe=6AC44177', c: 'wide', t: 'FIRST GLOW', m: 'EZRA',  alt: 'Misty forest at dawn' },
    { src: 'https://scontent.fcgy2-2.fna.fbcdn.net/v/t39.30808-6/829603728_122138861799194216_7281730303739102652_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1464&ctp=s1440x1464&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHAetxlvTbmvP-bhIjOQhELGKQHrmf-RnwYpAeuZ_5GfCW5up-DwIXBzTrC7RC9YkysW-NpdGQUvG3IH3MJojoW&_nc_ohc=hvJ10Uxy1EAQ7kNvwE4Vck9&_nc_oc=Ado0uuED6_OKJ9ppD9hT0goR8QFIuolyOECZBTJKqfDXTJmy89ydNcEPDfpyt4MyXfw&_nc_zt=23&_nc_ht=scontent.fcgy2-2.fna&_nc_gid=z4VfCP-08OoBtyq-4MqrJg&_nc_ss=7b2a8&oh=00_AQNCdMRnFy00ymzLZxFTGY9B5BsuJIMXEo-kMvC1IdL4Ig&oe=6AC43DE4', c: 'sq', t: 'ROCKY TRAIL',    m: 'EZRA', alt: 'Rocky hiking trail on a mountainside' },
    { src: 'https://scontent.fcgy2-2.fna.fbcdn.net/v/t39.30808-6/830187504_122138862075194216_8370186359174503041_n.jpg?stp=dst-jpg_tt6&cstp=mx1638x1651&ctp=s1638x1651&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGtKk6rYjBlLkS0MoDylXukWVYmo1sJ4f5ZViajWwnh_hy7zrditEmaYQ1ZME1ACJ48lDe5ZGphQEyaN-htHCS4&_nc_ohc=zV_ZS6-kQQUQ7kNvwFzr1d8&_nc_oc=AdqiAy4g-cy6Nolq87xVLl1Wd4jtyqeu61Sg5-htL5HJHGDOPIThV48gYscdtb1uAVA&_nc_zt=23&_nc_ht=scontent.fcgy2-2.fna&_nc_gid=cjCoG7TfqY55Uw4WnvXElA&_nc_ss=7b2a8&oh=00_AQNmEIPTuEjzzr4RarASXmUPITrXmFpgrbYe14hB7637YA&oe=6AC4542D', c: 'xwide', t: 'GREEN PASTURES', m: 'EZRA',  alt: 'Wide golden-hour mountain landscape' },
    { src: 'https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/830541616_122138862219194216_5822641234534931405_n.jpg?stp=dst-jpg_tt6&cstp=mx1638x1651&ctp=s1638x1651&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHFQH2bQ9MAxkfizr_rMaGs7-Df1Ufh_t_v4N_VR-H-35EcTSOYCBLU52y2nMQr6xEEWqO_A44Sk-hp_pYSiZOK&_nc_ohc=z8X4Rq8Uui0Q7kNvwGUaCl4&_nc_oc=AdplnEkiAGgq5Us4KyeugOKnYItULvpfWMtoqXrquoKhatn8RXDxfxAV4k2j7UHNwd0&_nc_zt=23&_nc_ht=scontent.fcgy2-1.fna&_nc_gid=i6L87p6QMe29QesNJZojew&_nc_ss=7b2a8&oh=00_AQP2xEiFSgcSm55ZzleBsj838eEeycOWUHMst-zutUeFaw&oe=6AC44770', c: 'big', t: 'RANCH VIEW', m: 'EZRA',  alt: 'Climber on a rocky cliff' },
    { src: 'https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/830541616_122138862219194216_5822641234534931405_n.jpg?stp=dst-jpg_tt6&cstp=mx1638x1651&ctp=s1638x1651&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHFQH2bQ9MAxkfizr_rMaGs7-Df1Ufh_t_v4N_VR-H-35EcTSOYCBLU52y2nMQr6xEEWqO_A44Sk-hp_pYSiZOK&_nc_ohc=z8X4Rq8Uui0Q7kNvwGUaCl4&_nc_oc=AdplnEkiAGgq5Us4KyeugOKnYItULvpfWMtoqXrquoKhatn8RXDxfxAV4k2j7UHNwd0&_nc_zt=23&_nc_ht=scontent.fcgy2-1.fna&_nc_gid=i6L87p6QMe29QesNJZojew&_nc_ss=7b2a8&oh=00_AQP2xEiFSgcSm55ZzleBsj838eEeycOWUHMst-zutUeFaw&oe=6AC44770', c: 'sq', t: 'FIELD OF JOY',     m: 'EZRA',   alt: 'Hiker standing at a scenic viewpoint' },
    { src: 'https://scontent.fcgy2-1.fna.fbcdn.net/v/t51.75761-15/491465875_18505382098059418_1729780144762894331_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1800&ctp=s1440x1800&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHK1LTTVWrBeX95aSs-xK7CyVhgSWLGcfPJWGBJYsZx88wOIphoUURpDiefIwmFBhDLaAZhgWg22BrJscPRiB9I&_nc_ohc=9lecnHU0zkcQ7kNvwEVcmo8&_nc_oc=Adofi2gzeuush-eJ6GDzA6Uy62zGgEf0S4LkB_uuRg_HSyDnilvzG-1hnhiTf65fXfw&_nc_zt=23&_nc_ht=scontent.fcgy2-1.fna&_nc_gid=rlcYzOQ5n5inaUJuXNgsxg&_nc_ss=7b2a8&oh=00_AQP5UtdYdOxHia5K-gevWMJWIXqxdYk-jmJN60ZU2UY78A&oe=6AC43F86', c: 'sq', t: 'LAKESIDE',    m: 'EZRA',   alt: 'Colorful alpine meadow flowers' }
  ],

  timeline: [
    { time: 'EZRA', t: 'THE START',   src: 'https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/829941524_122138858607194216_2004853785969758907_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1464&ctp=s1440x1464&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFnOOHx07W7rQC_Ivn5J-iL9TYQDk81S_f1NhAOTzVL96T9iY-BgcbqGGXPeBKuNfNr3eSA5IaZWBB0V7r68YXV&_nc_ohc=2fwNUA8tVWQQ7kNvwGTpQdU&_nc_oc=AdoRsf-_Z8MKe-KFCkDwNBYOKW5lppPrz4mOIRrEMBGLCVc2tJ7nK97IXJaQCA_c7JE&_nc_zt=23&_nc_ht=scontent.fcgy2-1.fna&_nc_gid=clxK5ksAFvYsubq503EhiQ&_nc_ss=7b2a8&oh=00_AQPrbljjM_lDhWfb3P1o8McpxweAI5EMR5pvPWDvE4AkMA&oe=6AC44C80', alt: 'Camp at the trailhead before sunrise' },
    { time: 'EZRA', t: 'FIRST LIGHT', src: 'https://scontent.fdvo1-2.fna.fbcdn.net/v/t39.30808-6/830997086_122138860005194216_2704822173604286693_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1464&ctp=s1440x1464&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEzb0xEYv7hi2KUYPgkTcJ1OmDiT558UMM6YOJPnnxQw3LvqIhC3sqxrHqyEC0_iNGmOCd3MkUyEzkgyIpfRPmu&_nc_ohc=1U5qTWweh98Q7kNvwHUoMxs&_nc_oc=Adqceh_UgqXAhknxY_rl_vbXhuL0x3W2q9rrZRMf5JSXlekotSM3Bchy7-JGkTQ66jk&_nc_zt=23&_nc_ht=scontent.fdvo1-2.fna&_nc_gid=d5ewci0G8XtWeKgNY538hA&_nc_ss=7b2a8&oh=00_AQOj9rCzA09tq-yEqpyZ0btFOfQuhbf7U7tOI-nYRDh0Hw&oe=6AC444A9',alt: 'First light over a misty valley' },
    { time: 'EZRA', t: 'TIYAAAA',  src: 'https://scontent.fcgy2-2.fna.fbcdn.net/v/t39.30808-6/830162293_122138856537194216_839128397632845631_n.jpg?stp=dst-jpg_tt6&cstp=mx960x958&ctp=s960x958&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFfxfBD4DavNGOZzrKeO_S05gQianlKUMLmBCJqeUpQwlxtsGHfOuFj97aoVw61EDXAAf3AvPGgemQ8PTEcCOKC&_nc_ohc=Y5gZULnqriIQ7kNvwFn4x0P&_nc_oc=AdosPmiOmgduMDjNiknFFwf0EqmoJNGtiIbvb5jst93ZkiwuyFMozDZs84cWALR5GBU&_nc_zt=23&_nc_ht=scontent.fcgy2-2.fna&_nc_gid=-0tuigG826z8P_OMTwbscg&_nc_ss=7b2a8&oh=00_AQMaMP-sp40so8-1Rcv6dzP673f5zC3y1w2noAvizrODsQ&oe=6AC4556B',    alt: 'Hikers on the climb' },
    { time: 'EZRA', t: 'THE SUMMIT',  src: 'https://scontent.fcgy2-3.fna.fbcdn.net/v/t39.30808-6/830938729_122138856939194216_349584311950380653_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1464&ctp=s1440x1464&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFMUiMoYJInZ8DG5hsH2GqtGENOwKwNzDIYQ07ArA3MMg_unyBO2zQhWtexZBkJ6eYig2AY9R3W8D5Kh1Rfuika&_nc_ohc=sS4KSARi_HgQ7kNvwGZ6mWC&_nc_oc=AdoxdDQeGvUWa_5sYs48IbDx6nElP-pv8oQnbtwuJC_-6iYUfpf80FV1ehzagTOPRZ0&_nc_zt=23&_nc_ht=scontent.fcgy2-3.fna&_nc_gid=1EprFi2lAGpGpHSr96CacQ&_nc_ss=7b2a8&oh=00_AQOPOKxU1tw82cB03lnK9GhFbcQWZ6tLsHDWTq5UtWHebg&oe=6AC43422', alt: 'The summit view' },
    { time: 'EZRA', t: 'THE DESCENT', src: 'https://scontent.fdvo1-1.fna.fbcdn.net/v/t39.30808-6/832818549_122138860359194216_5456793442537684994_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1464&ctp=s1440x1464&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEhZouOii3uKW5ZvJJ2JwvlNfv7bVzZMUQ1-_ttXNkxRAUOuxvc9PVj_KO6T-CQ71stkh1ycJH6iuLZWoOgc8z1&_nc_ohc=ue18O19IzvYQ7kNvwH86xMt&_nc_oc=AdoJzQJUe0_PRBVXRweQ5QIg3A6tcOvCRUpbshWa63ECGhrMIRrr4QBWLfK0wCDsIhQ&_nc_zt=23&_nc_ht=scontent.fdvo1-1.fna&_nc_gid=achksDHQdTxSgaq_xoEIfQ&_nc_ss=7b2a8&oh=00_AQOos2BlP6PX9RsG2P06MWs3b5uXEhTyH1CyAECKFxM28g&oe=6AC45E94', alt: 'Heading down in golden light' }
  ]
};

/* ===================== HELPERS ===================== */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

/* ===================== BUILD DOM FROM CONFIG ===================== */
// Static big images (hero + full-screen moments)
$$('img[data-img]').forEach(img => { img.src = IMAGES[img.dataset.img].src; });

// Collage tiles
$('#collage').innerHTML = IMAGES.gallery.map(g => `
  <figure class="ph ${g.c} reveal" data-lb data-full="${g.src}" data-title="${g.t}" tabindex="0">
    <img src="${g.src}" alt="${g.alt}" loading="lazy">
    <figcaption><b>${g.t}</b><span>${g.m}</span></figcaption>
  </figure>`).join('');

// Timeline
$('#timeline').innerHTML = IMAGES.timeline.map(s => `
  <li class="tl">
    <div class="txt reveal"><time>${s.time}</time><h3>${s.t}</h3></div>
    <div class="pic reveal" data-lb data-full="${s.src}" data-title="${s.t}" tabindex="0"><img src="${s.src}" alt="${s.alt}" loading="lazy"></div>
  </li>`).join('');

/* ===================== LOADER ===================== */
window.addEventListener('load', () => setTimeout(() => $('#loader').classList.add('done'), 900));

/* ===================== NAV + PROGRESS + PARALLAX ===================== */
const nav = $('#nav'), bar = $('#progress');
const plx = $$('[data-speed]');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
let ticking = false;

function onScroll() {
  const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
  bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  nav.classList.toggle('scrolled', y > 80);
  if (!reduce) plx.forEach(img => {
    const r = img.parentElement.getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight) return;          // only animate visible ones
    const offset = (r.top + r.height / 2 - innerHeight / 2) * parseFloat(img.dataset.speed);
    img.style.transform = `translate3d(0,${offset.toFixed(1)}px,0)`;
  });
  ticking = false;
}
addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
addEventListener('resize', onScroll);
onScroll();

// Mobile menu
const burger = $('#burger'), links = $('#links');
burger.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
links.addEventListener('click', () => { links.classList.remove('open'); burger.setAttribute('aria-expanded', false); });

/* ===================== SCROLL REVEAL ===================== */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: 0.12 });
$$('.reveal').forEach(el => io.observe(el));

/* ===================== CUSTOM CURSOR (desktop) ===================== */
const cur = $('#cursor');
if (matchMedia('(hover:hover)').matches) {
  let cx = 0, cy = 0, tx = 0, ty = 0;
  addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; cur.style.opacity = 1; });
  (function loop() { cx += (tx - cx) * .18; cy += (ty - cy) * .18; cur.style.transform = `translate(${cx}px,${cy}px)`; requestAnimationFrame(loop); })();
  document.addEventListener('mouseover', e => cur.classList.toggle('big', !!e.target.closest('[data-lb]')));
}

/* ===================== LIGHTBOX ===================== */
const items = $$('[data-lb]');
const lb = $('#lb'), lbImg = $('#lbImg');
let idx = 0;

function show(i, animate = true) {
  idx = (i + items.length) % items.length;
  const el = items[idx];
  const swap = () => {
    lbImg.src = el.dataset.full;
    lbImg.alt = $('img', el).alt;
    $('#lbTitle').textContent = el.dataset.title;
    $('#lbCount').textContent = `${idx + 1} / ${items.length}`;
    lbImg.classList.remove('swap');
  };
  if (animate) { lbImg.classList.add('swap'); setTimeout(swap, 250); } else swap();
}
function openLb(i) {
  lb.hidden = false; show(i, false);
  requestAnimationFrame(() => lb.classList.add('show'));
  document.body.style.overflow = 'hidden';
}
function closeLb() {
  lb.classList.remove('show');
  setTimeout(() => { lb.hidden = true; }, 350);
  document.body.style.overflow = '';
}
items.forEach((el, i) => {
  el.addEventListener('click', () => openLb(i));
  el.addEventListener('keydown', e => { if (e.key === 'Enter') openLb(i); });
});
$('#lbClose').onclick = closeLb;
$('#lbPrev').onclick = () => show(idx - 1);
$('#lbNext').onclick = () => show(idx + 1);
lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
addEventListener('keydown', e => {
  if (lb.hidden) return;
  if (e.key === 'Escape') closeLb();
  if (e.key === 'ArrowLeft') show(idx - 1);
  if (e.key === 'ArrowRight') show(idx + 1);
});
// Swipe on touch devices
let sx = 0;
lb.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
lb.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - sx;
  if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1));
}, { passive: true });
