import parquet_1 from '../images/floor/parketType/parket_1.png'
import parquet_2 from '../images/floor/parketType/parket_2.png'
import parquet_3 from '../images/floor/parketType/parket_3.png'
import parquet_101 from '../images/floor/parketType/parket_large_1.png'
import parquet_102 from '../images/floor/parketType/parket_large_1_option_2.png'
import parquet_103 from '../images/floor/parketType/parket_large_1_option_3.png'
import parquet_201 from '../images/floor/parketType/parket_large_2.png'
import parquet_202 from '../images/floor/parketType/parket_large_2_option_2.png'
import parquet_203 from '../images/floor/parketType/parket_large_2_option_3.png'
import parquet_301 from '../images/floor/parketType/parket_large_3.png'
import parquet_302 from '../images/floor/parketType/parket_large_3_option_2.png'
import parquet_303 from '../images/floor/parketType/parket_large_3_option_3.png'
import tile_1 from '../images/floor/plattenType/platten_1.png'
import tile_2 from '../images/floor/plattenType/platten_2.png'
import tile_3 from '../images/floor/plattenType/platten_3.png'
import tile_4 from '../images/floor/plattenType/platten_4.png'
import tile_101 from '../images/floor/plattenType/platten_1_large.png'
import tile_102 from '../images/floor/plattenType/platten_2_large.png'
import tile_103 from '../images/floor/plattenType/platten_3_large.png'
import tile_104 from '../images/floor/plattenType/platten_4_large.png'

const floorData = [
  {
    floor: [
      {
        id: 1,
        name: 'parquet',
        color: 'white',
        material: 'Oak',
        preview: parquet_1,
        size: '47 x 7cm',
        price: 'included',
        option: '',
        content: parquet_101
      },
      {
        id: 2,
        name: 'parquet',
        color: 'natur',
        material: 'Oak',
        preview: parquet_2,
        size: '47 x 7cm',
        price: 'included',
        option: '',
        content: parquet_201
      },
      {
        id: 3,
        name: 'parquet',
        color: 'brown',
        material: 'Oak',
        preview: parquet_3,
        size: '47 x 7cm',
        price: 'included',
        option: '',
        content: parquet_301
      },
      {
        id: 4,
        name: 'parquet',
        color: 'white',
        material: 'Oak',
        preview: parquet_1,
        size: '125 x 10cm',
        price: '3,500',
        option: 'brushed',
        content: parquet_102
      },
      {
        id: 5,
        name: 'parquet',
        color: 'natur',
        material: 'Oak',
        preview: parquet_2,
        size: '125 x 10cm',
        price: '3,500',
        option: 'brushed',
        content: parquet_202
      },
      {
        id: 6,
        name: 'parquet',
        color: 'brown',
        material: 'Oak',
        preview: parquet_3,
        size: '125 x 10cm',
        price: '3,500',
        option: 'brushed',
        content: parquet_302
      },
      {
        id: 7,
        name: 'parquet',
        color: 'white',
        material: 'Oak',
        preview: parquet_1,
        size: '210 x 14cm',
        price: '4,500',
        option: 'deep brushed',
        content: parquet_103
      },
      {
        id: 8,
        name: 'parquet',
        color: 'natur',
        material: 'Oak',
        preview: parquet_2,
        size: '210 x 14cm',
        price: '4,500',
        option: 'deep brushed',
        content: parquet_203
      },
      {
        id: 9,
        name: 'parquet',
        color: 'brown',
        material: 'Oak',
        preview: parquet_3,
        size: '210 x 14cm',
        price: '4,500',
        option: 'deep brushed',
        content: parquet_303
      },
      {
        id: 10,
        name: 'tiles',
        color: 'white',
        material: 'Ceramic',
        size: '40x20',
        price: 'included',
        preview: tile_1,
        content: tile_101
      },
      {
        id: 11,
        name: 'tiles',
        color: 'sand',
        material: 'Ceramic',
        size: '40x20',
        price: 'included',
        preview: tile_2,
        content: tile_102
      },
      {
        id: 12,
        name: 'tiles',
        color: 'gray',
        material: 'Ceramic',
        size: '40x20',
        price: 'included',
        preview: tile_3,
        content: tile_103
      },
      {
        id: 13,
        name: 'tiles',
        color: 'beige',
        material: 'Ceramic',
        size: '40x20',
        price: 'included',
        preview: tile_4,
        content: tile_104
      }
    ]
  }
]

export default floorData;