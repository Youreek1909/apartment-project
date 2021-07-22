import kitchen_000 from '../images/kitchen/kitchenType/front_0_back_0_cover_0.png'
import kitchen_100 from '../images/kitchen/kitchenType/front_1_back_0_cover_0.png'
import kitchen_200 from '../images/kitchen/kitchenType/front_2_back_0_cover_0.png'
import kitchen_010 from '../images/kitchen/kitchenType/front_0_back_1_cover_0.png'
import kitchen_110 from '../images/kitchen/kitchenType/front_1_back_1_cover_0.png'
import kitchen_210 from '../images/kitchen/kitchenType/front_2_back_1_cover_0.png'
import kitchen_001 from '../images/kitchen/kitchenType/front_0_back_0_cover_1.png'
import kitchen_002 from '../images/kitchen/kitchenType/front_0_back_0_cover_2.png'
import kitchen_101 from '../images/kitchen/kitchenType/front_1_back_0_cover_1.png'
import kitchen_102 from '../images/kitchen/kitchenType/front_1_back_0_cover_2.png'
import kitchen_201 from '../images/kitchen/kitchenType/front_2_back_0_cover_1.png'
import kitchen_202 from '../images/kitchen/kitchenType/front_2_back_0_cover_2.png'
import kitchen_011 from '../images/kitchen/kitchenType/front_0_back_1_cover_1.png'
import kitchen_012 from '../images/kitchen/kitchenType/front_0_back_1_cover_2.png'
import kitchen_111 from '../images/kitchen/kitchenType/front_1_back_1_cover_1.png'
import kitchen_112 from '../images/kitchen/kitchenType/front_1_back_1_cover_2.png'
import kitchen_211 from '../images/kitchen/kitchenType/front_2_back_1_cover_1.png'
import kitchen_212 from '../images/kitchen/kitchenType/front_2_back_1_cover_2.png'
import kitchen_front_0 from '../images/kitchen/front/front_0.png'
import kitchen_front_1 from '../images/kitchen/front/front_1.png'
import kitchen_front_2 from '../images/kitchen/front/front_2.png'
import kitchen_back_0 from '../images/kitchen/back/back_0.png'
import kitchen_back_1 from '../images/kitchen/back/back_1.png'
import kitchen_cover_0 from '../images/kitchen/cover/cover_0.png'
import kitchen_cover_1 from '../images/kitchen/cover/cover_1.png'
import kitchen_cover_2 from '../images/kitchen/cover/cover_2.png'
import kitchen_oven_0 from '../images/kitchen/appliances/oven.png'
import kitchen_oven_1 from '../images/kitchen/appliances/oven-v-zug.png'
import kitchen_bar_0 from '../images/kitchen/appliances/griffloss.png'
import kitchen_bar_1 from '../images/kitchen/appliances/griffleiste.png'
import kitchen_tap_0 from '../images/kitchen/appliances/tap_blanco.png'
import kitchen_tap_1 from '../images/kitchen/appliances/tap_kwc.png'
import kitchen_individual from '../images/icons/noStyle.svg'

const kitchenData = [
  {
    kitchen: [
      {
        background: [
          {
            id: 0,
            preview: kitchen_000
          },
          {
            id: 1,
            preview: kitchen_100
          },
          {
            id: 2,
            preview: kitchen_200
          },
          {
            id: 3,
            preview: kitchen_010
          },
          {
            id: 4,
            preview: kitchen_110
          },
          {
            id: 5,
            preview: kitchen_210
          },
          {
            id: 6,
            preview: kitchen_001
          },
          {
            id: 7,
            preview: kitchen_002
          },
          {
            id: 8,
            preview: kitchen_101
          },
          {
            id: 9,
            preview: kitchen_102
          },
          {
            id: 10,
            preview: kitchen_201
          },
          {
            id: 11,
            preview: kitchen_202
          },
          {
            id: 12,
            preview: kitchen_011
          },
          {
            id: 13,
            preview: kitchen_012
          },
          {
            id: 14,
            preview: kitchen_111
          },
          {
            id: 15,
            preview: kitchen_112
          },
          {
            id: 16,
            preview: kitchen_211
          },
          {
            id: 17,
            preview: kitchen_212
          },
        ]
      },
      {
        front: [
          {
            id: 0,
            preview: kitchen_front_0,
            title: 'White gloss',
            description: 'White'
          },
          {
            id: 1,
            preview: kitchen_front_1,
            title: 'Light gray matt',
            description: 'Natural'
          },
          {
            id: 2,
            preview: kitchen_front_2,
            title: 'Cubanite gloss',
            description: 'Elegant'
          }
        ]
      },
      {
        back: [
          {
            id: 0,
            preview: kitchen_back_0,
            title: 'Blue',
            description: 'Plain'
          },
          {
            id: 1,
            preview: kitchen_back_1,
            title: 'Lilac gray',
            description: 'Natural'
          }
        ]
      },
      {
        cover: [
          {
            id: 0,
            preview: kitchen_cover_0,
            title: 'Quartz White',
            description: 'Plain'
          },
          {
            id: 1,
            preview: kitchen_cover_1,
            title: 'Quartz Sand',
            description: 'Natural'
          },
          {
            id: 2,
            preview: kitchen_cover_2,
            title: 'Quartz Anthracite',
            description: 'Elegant'
          }
        ]
      },
      {
        oven: [
          {
            id: 0,
            preview: kitchen_oven_0,
            title: 'Oven',
            description: 'Electrolux'
          },
          {
            id: 1,
            preview: kitchen_oven_1,
            title: 'V-zug',
            description: 'CHF 2,700.-'
          }
        ]
      },
      {
        appliances: [
          {
            tap: [
              {
                id: 0,
                preview: kitchen_tap_0,
                title: 'Blanco',
                description: 'Alta S Compact'
              },
              {
                id: 1,
                preview: kitchen_tap_1,
                title: 'KWC',
                description: 'Ava Chrom +CHF 2,000.-'
              }
            ]
          },
          {
            bar: [
              {
                id: 0,
                preview: kitchen_bar_0,
                title: 'Grifflos',
                description: 'Grifflos offnend'
              },
              {
                id: 1,
                preview: kitchen_bar_1,
                title: 'Griffprofil',
                description: 'Aluminium +CHF 1,000.-'
              }
            ]
          }
        ]
      }
    ]
  }
]

export default kitchenData;