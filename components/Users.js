import { View, Text } from 'react-native'
import React from 'react'

const Users = () => {
    const users = [
        {id:1,name:"John"},
        {id:2,name:"Mary"}
    ]
  return (
    <View>
      {
        users.map((user,index)=>{
            return <Text Key={user.id}>{index+1}.{user.name}</Text>

        })
      }
    </View>
  )
}

export default Users