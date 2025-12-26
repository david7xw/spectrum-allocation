export const spectrumData = [
  {
    id: "B1",
    title: "Band B1, n1 (FDD)",
    freqStart: "2110 / 1920 MHz",
    freqEnd: "2170 / 1980 MHz",
    blocks: [
      {
        type: "vf",
        label: "Vodafone",
        width: 19.8,
        details: `<strong>Operated by:</strong><br>Vodafone<br><br>
                      <strong>Bandwidth:</strong><br>20 MHz (2110 - 2130 MHz downlink and 1920 - 1940 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2026-02-28<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 76`
      },
      {
        type: "digi",
        label: "DIGI",
        width: 10,
        details: `<strong>Operated by:</strong><br>Digi Communications N.V.<br><br>
                      <strong>Bandwidth:</strong><br>10 MHz (2130 - 2150 MHz downlink and 1940 - 1960 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2026-02-23<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 300`
      },
      {
        type: "oro",
        label: "Orange",
        width: 14.8,
        details: `<strong>Operated by:</strong><br>UAB Tele2 Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>20 MHz (2150 - 2170 MHz downlink and 1960 - 1980 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2026-03-06<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 500<br>5G: NRARFCN 432030<br><br>
                      <strong>Details:</strong><br>Some sites run LTE/5G DSS`
      },
      {
        type: "digi",
        label: "DIGI",
        width: 14.8,
        details: `<strong>Operated by:</strong><br>Digi Communications N.V.<br><br>
                      <strong>Bandwidth:</strong><br>15 MHz (2150 - 2170 MHz downlink and 1960 - 1980 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2026-03-06<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 500<br>5G: NRARFCN 432030<br><br>
                      <strong>Details:</strong><br>Some sites run LTE/5G DSS`
      }
    ]
  },

  {
    id: "B3",
    title: "Band B3 (FDD)",
    freqStart: "1805 / 1710 MHz",
    freqEnd: "1880 / 1785 MHz",
    blocks: [
      {
        type: "vf",
        label: "Vodafone",
        width: 30,
        details: `<strong>Operated by:</strong><br>AB Telia Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>4.8 MHz (1805 - 1809.8 MHz downlink and 1710 - 1714.8 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Details:</strong><br>sometimes used for 2G<br><br>
                      <strong>Used for:</strong><br>2G GSM: ARFCN 531, 532, 533, 534`
      },
      {
        type: "oro",
        label: "Orange",
        width: 20,
        details: `<strong>Operated by:</strong><br>AB Telia Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>20 MHz (1809.8 - 1829.8 MHz downlink and 1714.8 - 1734.8 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 1348`
      },
      {
        type: "vf",
        label: "Vodafone",
        width: 10,
        details: `<strong>Operated by:</strong><br>AB Telia Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>0.2 MHz (1829.8 - 1830 MHz downlink and 1734.8 - 1735 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Details:</strong><br>Unused spectrum`
      },
      {
        type: "digi",
        label: "DIGI",
        width: 15,
        details: `<strong>Operated by:</strong><br>UAB Tele2 Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>2.5 MHz (1830 - 1832.4 MHz downlink and 1735 - 1747.4 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Details:</strong><br>sometimes used for 2G<br><br>
                      <strong>Used for:</strong><br>2G GSM: ARFCN 640, 643`
      }
    ]
  },

  {
    id: "B7",
    title: "Band B7 (FDD)",
    freqStart: "2620 / 2500 MHz",
    freqEnd: "2690 / 2570 MHz",
    blocks: [
      {
        type: "digi",
        label: "DIGI",
        width: 10,
        details: `<strong>Operated by:</strong><br>UAB Tele2 Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>20 MHz (2620 - 2640 MHz downlink and 2500 - 2520 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2027-08-29<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 2850`
      },
      {
        type: "oro",
        label: "Orange",
        width: 20,
        details: `<strong>Operated by:</strong><br>AB Telia Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>20 MHz (2640 - 2660 MHz downlink and 2520 - 2540 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2027-08-29<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 3050`
      },
      {
        type: "digi",
        label: "DIGI",
        width: 40,
        details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>20 MHz (2660 - 2680 MHz downlink and 2540 - 2560 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2027-08-29<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 3250<br><br>
                      <strong>Details:</strong><br>20+10 MHz split as separate carriers.`
      }
    ]
  },

  {
    id: "B8",
    title: "Band B8 (FDD)",
    freqStart: "925.1 / 880.1 MHz",
    freqEnd: "960.9 / 915.9 MHz",
    blocks: [
      {
        type: "vf",
        label: "Vodafone",
        width: 13,
        details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>5 MHz (925.1 - 930.1 MHz downlink and 880.1 - 885.1 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Used for:</strong><br>3G UMTS: UARFCN 2938 (historical)<br>4G LTE: EARFCN 3476<br><br>
                      <strong>Details:</strong><br>Previously used for 3G; now being replaced with 5 MHz B8 LTE`
      },
      {
        type: "vfdigi",
        label: "DIGI",
        width: 2,
        details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>6.6 MHz (930.1 - 936.7 MHz downlink and 885.1 - 891.7 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Used for:</strong><br>2G GSM: ARFCN 1, 3, 5, 7, 1001, 1003, 1005, 1007, 1009, 1011, 1013, 1015, 1017, 1019, 1021, 1023<br>`
      },
      {
        type: "digi",
        label: "DIGI",
        width: 10,
        details: `<strong>Operated by:</strong><br>AB Telia Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>11.6 MHz (936.7 - 948.3 MHz downlink and 891.7 - 903.3 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Used for:</strong><br>2G GSM: ARFCN 9, 10, 11, 12, 13, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66<br>LTE: EARFCN 3617<br><br>
                      <strong>Details:</strong><br>10 MHz LTE`
      },
      {
        type: "oro",
        label: "Orange",
        width: 10,
        details: `<strong>Operated by:</strong><br>UAB Tele2 Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>6.6 MHz (948.3 - 954.9 MHz downlink and 903.3 - 909.9 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Used for:</strong><br>2G GSM: ARFCN 67-99<br>`
      }
    ]
  },

  {
    id: "B20",
    title: "Band B20 (FDD)",
    freqStart: "791 / 832 MHz",
    freqEnd: "821 / 862 MHz",
    blocks: [
      {
        type: "vf",
        label: "Vodafone",
        width: 15,
        details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>10 MHz (791 - 801 MHz downlink and 832 - 842 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2030-07-01<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 6200`
      },
      {
        type: "oro",
        label: "Orange",
        width: 10,
        details: `<strong>Operated by:</strong><br>AB Telia Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>10 MHz (801 - 811 MHz downlink and 842 - 852 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2030-07-01<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 6300`
      },
      {
        type: "digi",
        label: "DIGI",
        width: 5,
        details: `<strong>Operated by:</strong><br>UAB Tele2 Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>10 MHz (811 - 821 MHz downlink and 852 - 862 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2030-07-01<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 6400`
      }
    ]
  },

  {
    id: "B28",
    title: "Bands B28, n28 (FDD)",
    freqStart: "758 / 703 MHz",
    freqEnd: "788 / 733 MHz",
    blocks: [
      {
        type: "reserved",
        label: "Reserved",
        width: 10,
        details: `<strong>Bandwidth:</strong><br>10 MHz (758 - 768 MHz downlink and 703 - 713 MHz uplink)<br><br>
              <strong>Details:</strong><br>Should be auctioned soon`
      },
      {
        type: "unallocated",
        label: "Unallocated",
        width: 10,
        details: `<strong>Operated by:</strong><br>AB Telia Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>10 MHz (768 - 778 MHz downlink and 713 - 723 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2042-09-26<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 9360 (historical)<br>5G: NRARFCN 154570<br><br>
                      <strong>Details:</strong><br>Previously used for LTE/5G DSS; primarily used for 5G only.`
      },
      {
        type: "oro",
        label: "Orange",
        width: 5,
        details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>10 MHz (778 - 783 MHz downlink and 723 - 728 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2042-10-11<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 9435`
      },
      {
        type: "vf",
        label: "Vodafone",
        width: 5,
        details: `<strong>Operated by:</strong><br>UAB Tele2 Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>10 MHz (783 - 788 MHz downlink and 728 - 733 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2042-09-26<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 9485`
      }
    ]
  },

  {
    id: "B32",
    title: "Bands B32, B75, n75 (SDL)",
    freqStart: "1432 MHz",
    freqEnd: "1512 MHz",
    blocks: [
      {
        type: "oro",
        label: "Orange",
        width: 40,
        details: `<strong>Bandwidth:</strong><br>20 MHz (1432 - 1452 MHz)`
      }
    ]
  },

  {
    id: "B38",
    title: "Band B38 (TDD)",
    freqStart: "2570 MHz",
    freqEnd: "2620 MHz",
    blocks: [
      {
        type: "digi",
        label: "DIGI",
        width: 45,
        details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>5 MHz (2570 - 2575 MHz)<br><br>
                      <strong>Valid until:</strong><br>2030-01-15<br><br>
                      <strong>Details:</strong><br>Unused<br>Spectrum block acquired after the acquisition of Mezon`
      },
      {
        type: "unallocated",
        label: "Unallocated",
        width: 5,
        details: `<strong>Bandwidth:</strong><br>20 MHz (1492 - 1512 MHz)`
      }
    ]
  },

  {
    id: "B78",
    title: "Band n78 (TDD)",
    freqStart: "3400 MHz",
    freqEnd: "3800 MHz",
    blocks: [
      {
        type: "digi",
        label: "DIGI",
        width: 50,
        details: `<strong>Operated by:</strong><br>UAB Tele2 Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>100 MHz (3400 - 3500 MHz)<br><br>
                      <strong>Valid until:</strong><br>2042-09-26<br><br>
                      <strong>Used for:</strong><br>5G: NRARFCN 630000`
      },
      {
        type: "vf",
        label: "Vodafone",
        width: 100,
        details: `<strong>Operated by:</strong><br>AB Telia Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>100 MHz (3500 - 3600 MHz)<br><br>
                      <strong>Valid until:</strong><br>2042-09-26<br><br>
                      <strong>Used for:</strong><br>5G: NRARFCN 634080`
      },
      {
        type: "oro",
        label: "Orange",
        width: 160,
        details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>100 MHz (3600 - 3700 MHz)<br><br>
                      <strong>Valid until:</strong><br>2042-09-26<br><br>
                      <strong>Used for:</strong><br>5G: NRARFCN 640704<br>`
      },
      {
        type: "unallocated",
        label: "Unallocated",
        width: 50,
        details: `<strong>Operated by:</strong><br>Ministry of National Defence of Lithuania<br><br>
                      <strong>Bandwidth:</strong><br>100 MHz (3700 - 3800 MHz)<br><br>
                      <strong>Details:</strong><br>Not used for cellular`
      },
      {
        type: "reserved",
        label: "Reserved",
        width: 40,
        details: `<strong>Operated by:</strong><br>Ministry of National Defence of Lithuania<br><br>
                      <strong>Bandwidth:</strong><br>100 MHz (3700 - 3800 MHz)<br><br>
                      <strong>Details:</strong><br>Not used for cellular`
      }
    ]
  }
];
