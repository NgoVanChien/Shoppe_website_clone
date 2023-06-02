export const sortBy = {
  createdAt: 'createdAt',
  view: 'view',
  sold: 'sold',
  price: 'price'
} as const

// as const để không bị thay đổi Object

// Read Only - Not Write

export const order = {
  asc: 'asc',
  desc: 'desc'
} as const
