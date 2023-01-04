// import { GetStaticPaths, GetStaticProps } from 'next'
// import React, { useEffect, useState } from 'react'

// import { api } from '~/config/Axios'
// import { User } from '../../utils/UserInterface'

export default function CurrentFeed(user) {
  return (
    <h1>{user?.id}</h1>
  )
}

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const username = params?.username

//   const res = await api.get(`/users/findUsername/${username}`)
//   const user = await res.data

//   return {
//     props: {
//       user: user,
//     },
//   }
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   const users: User[] = await api.get(`/users`).then((users) => users.data)

//   const paths = users.map((user) => ({
//     params: { username: user.username },
//   }))

//   return { paths, fallback: false }
// }
