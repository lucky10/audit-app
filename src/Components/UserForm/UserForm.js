import React, { Component } from "react";
import * as R from "ramda";
import MaterialIcon from "material-icons-react";

import Table from "../Table/Table";
import UserFormModal from "./UserFormModal";

class UserForm extends Component {
  tableHeaders = [
    { title: "", isEdit: true, path: null },
    { title: "Клиент", isEdit: false, path: "name" },
    { title: "Телефон", isEdit: false, path: "phone" },
    { title: "E-Mail", isEdit: false, path: "email" },
    { title: "Дата последнего посещения", isEdit: false, path: "lastDate" },
    { title: "Сумма оплат", isEdit: false, path: "sumMoney" },
    { title: "Количество посещения", isEdit: false, path: "numVisits" },
    { title: "Активный абонемент", isEdit: false, path: "isActive" },
  ];

  state = {
    isModalOpen: false,
    users: [
      {
        id: 1,
        name: "Иван Петрович",
        phone: "+71111111111",
        email: "1111@dwdwd.com",
        lastDate: "------",
        sumMoney: "------",
        numVisits: "------",
        isActive: "------",
      },
      {
        id: 2,
        name: "Haha111",
        phone: "+76666666666",
        email: "answer@mail.ru",
        lastDate: "------",
        sumMoney: "------",
        numVisits: "------",
        isActive: "------",
      },
    ],
    newUserId: 3,
    editedUser: { id: null, name: null, email: null, phone: null },
  };

  beginCreatingNewUser = () => {
    const { isModalOpen, editedUser, newUserId } = this.state;
    if (isModalOpen === false) {
      this.setState({
        isModalOpen: true,
        newUserId: R.inc(newUserId),
        editedUser: R.evolve({ id: R.always(newUserId) }, editedUser),
      });
    }
  };

  saveUser = () => {
    const { editedUser, users } = this.state;
    const addLastDate = R.assoc("lastDate", "------");
    const addSumMoney = R.assoc("sumMoney", "------");
    const addNumVisits = R.assoc("numVisits", "------");
    const addIsActive = R.assoc("isActive", "------");
    const addAdditionalInfo = R.pipe(
      addLastDate,
      addSumMoney,
      addNumVisits,
      addIsActive,
    );
    const userToSave = addAdditionalInfo(editedUser);

    const indexToSave = R.findIndex(R.propEq("id", R.prop("id", editedUser)), users);
    const usersToSave =
      indexToSave === -1
        ? R.insert(0, userToSave, users)
        : R.update(indexToSave, userToSave, users);

    this.setState({
      users: usersToSave,
      isModalOpen: false,
      editedUser: { id: null, name: null, email: null, phone: null },
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
      editedUser: { id: null, name: null, email: null, phone: null },
    });
  };

  editUser = user => {
    this.setState({
      editedUser: { id: user.id, name: user.name, email: user.email, phone: user.phone },
      isModalOpen: true,
    });
  };

  deleteUser = user => {
    const { users, editedUser } = this.state;
    // we don't want to delete edited user
    if (R.prop("id", user) !== R.prop("id", editedUser)) {
      this.setState({
        users: R.reject(R.propEq("id", R.prop("id", user)), users),
      });
    }
  };

  savePhone = e => {
    const { editedUser } = this.state;
    const { value } = e.target;

    this.setState({
      editedUser: R.evolve({ phone: R.always(value) }, editedUser),
    });
  };

  saveMail = e => {
    const { editedUser } = this.state;
    const { value } = e.target;

    this.setState({
      editedUser: R.evolve({ email: R.always(value) }, editedUser),
    });
  };

  saveName = e => {
    const { editedUser } = this.state;
    const { value } = e.target;

    this.setState({
      editedUser: R.evolve({ name: R.always(value) }, editedUser),
    });
  };

  render() {
    const { editedUser, isModalOpen, users } = this.state;

    return (
      <div style={{ width: "100%", backgroundColor: "#F7F7F7" }}>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#F7F7F7",
          }}
        >
          <div
            style={{
              flex: 1,
              marginLeft: 10,
              marginTop: 10,
              marginBottom: 10,
              display: "flex",
              textAlign: "left",
              fontFamily: "Roboto",
              fontSize: 30,
              fontWeight: "900",
            }}
          >
            Клиенты
          </div>
          <div style={{ marginRight: 10 }}>
            <MaterialIcon icon="clear" color="black" />
          </div>
        </div>
        <div
          onClick={() => this.beginCreatingNewUser()}
          style={{ flexDirection: "row", display: "flex", alignItems: "center", marginLeft: 20 }}
        >
          <MaterialIcon icon="add_circle" color="black" />
          <div style={{ marginLeft: 10 }}>Добавить клиента</div>
        </div>
        {isModalOpen && (
          <UserFormModal
            editedUser={editedUser}
            closeModal={this.closeModal}
            handleEditMail={this.saveMail}
            handleEditName={this.saveName}
            handleEditPhone={this.savePhone}
            handleSaveUser={this.saveUser}
          />
        )}
        <Table
          data={users}
          editHandler={this.editUser}
          deleteHandler={this.deleteUser}
          headers={this.tableHeaders}
        />
      </div>
    );
  }
}

export default UserForm;
