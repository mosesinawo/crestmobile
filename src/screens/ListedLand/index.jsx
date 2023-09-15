import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LandList from '../../components/landList'
import EditModal from '../../components/modals/EditModal'
import DeleteModal from '../../components/modals/DeleteModal'

const ListedLand = () => {

  const [modal, setModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  return (
    // <View styles={modal ? styles.show : styles.hide}>
    <>
      
      <LandList setmodal={setModal} setDeletemodal={setDeleteModal}  />
        {/* {modal && <EditModal setmodal={setModal} />} */}
       {modal && <EditModal setmodal={setModal} modal={modal} />}
       {deleteModal && <DeleteModal setDeletemodal={setDeleteModal} deleteModal={deleteModal} />}
      
    </>
  )
}

export default ListedLand

const styles = StyleSheet.create({
  show: {
   
  
  }
})