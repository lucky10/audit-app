import React, { Component } from "react";
import * as R from "ramda";
import MaterialIcon from "material-icons-react";

class UserFormModal extends Component {
  state = {};

  render() {
    const {
      editedUser,
      closeModal,
      handleEditName,
      handleEditMail,
      handleEditPhone,
      handleSaveUser,
    } = this.props;
    return (
      <div>
        <div style={{ flexDirection: "row", display: "flex" }}>
          <div style={{ flexDirection: "column", flex: 3 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 25,
                marginRight: 25,
              }}
            >
              <div style={{ fontFamily: "Roboto", size: 7, marginTop: 10, color: "lightgrey" }}>
                Имя
              </div>
              <input
                style={{
                  marginTop: 10,
                  backgroundColor: "white",
                  borderColor: "lightgrey",
                  fontSize: 15,
                  padding: 10,
                  borderRadius: 15,
                  textColor: "grey",
                }}
                type="text"
                placeholder="Иванов Иван Иванович"
                value={R.prop("name", editedUser)}
                onChange={handleEditName}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 25,
                marginRight: 25,
              }}
            >
              <div style={{ fontFamily: "Roboto", size: 7, marginTop: 10, color: "lightgrey" }}>
                E-Mail
              </div>
              <input
                style={{
                  marginTop: 10,
                  backgroundColor: "white",
                  borderColor: "lightgrey",
                  fontSize: 15,
                  padding: 10,
                  borderRadius: 15,
                  textColor: "grey",
                }}
                type="text"
                placeholder="name@address.ru"
                value={R.prop("email", editedUser)}
                onChange={handleEditMail}
              />
            </div>
          </div>
          <div style={{ flexDirection: "column", flex: 2 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 25,
                marginRight: 25,
              }}
            >
              <div style={{ fontFamily: "Roboto", size: 7, marginTop: 10, color: "lightgrey" }}>
                Телефон
              </div>
              <input
                style={{
                  marginTop: 10,
                  backgroundColor: "white",
                  borderColor: "lightgrey",
                  fontSize: 15,
                  padding: 10,
                  borderRadius: 15,
                  textColor: "grey",
                }}
                type="text"
                value={R.prop("phone", editedUser)}
                onChange={handleEditPhone}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 25,
                marginRight: 25,
              }}
            >
              <div
                style={{
                  height: 40,
                  width: 150,
                  borderRadius: 15,
                  marginTop: 43,
                  backgroundColor: "#D3001C",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  color: "white",
                }}
                onClick={handleSaveUser}
              >
                Сохранить
              </div>
            </div>
          </div>
        </div>
        <div style={{ flexDirection: "column", display: "flex", marginLeft: 20, marginRight: 20 }}>
          <div style={{ flexDirection: "row", display: "flex" }} onClick={closeModal}>
            <MaterialIcon icon="expand_less" color="grey" size="40" />
            <div style={{ flex: 1 }} />
            <MaterialIcon icon="expand_less" color="grey" size="40" />
          </div>
          <div style={{ height: 1, backgroundColor: "grey", marginLeft: 20, marginRight: 20 }} />
        </div>
      </div>
    );
  }
}

export default UserFormModal;
