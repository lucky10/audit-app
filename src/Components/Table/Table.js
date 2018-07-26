import React, { Component } from "react";
import * as R from "ramda";
import MaterialIcon from "material-icons-react";

class Table extends Component {
  state = {};

  render() {
    const { headers, data, editHandler, deleteHandler } = this.props;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: 20,
          marginRight: 20,
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        {R.map(
          column => (
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  minHeight: 75,
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "lightgrey",
                  fontSize: 12,
                  flex: 1,
                }}
              >
                {column.title}
              </div>
              <div style={{ height: 1, backgroundColor: "#D3001C" }} />
              <div>
                {R.map(
                  item => (
                    <div>
                      {column.isEdit ? (
                        <div
                          style={{
                            display: "flex",
                            minHeight: 75,
                            textAlign: "center",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <div onClick={() => editHandler(item)}>
                            <MaterialIcon icon="edit" color="black" />
                          </div>
                          <div onClick={() => deleteHandler(item)}>
                            <MaterialIcon icon="clear" color="black" />
                          </div>
                        </div>
                      ) : (
                        <div
                          style={{
                            display: "flex",
                            minHeight: 75,
                            textAlign: "center",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 16,
                            marginLeft: 3,
                            marginRight: 3,
                          }}
                        >
                          {R.prop(column.path, item)}
                        </div>
                      )}
                    </div>
                  ),
                  data,
                )}
              </div>
            </div>
          ),
          headers,
        )}
      </div>
    );
  }
}

export default Table;
