import React, { Component } from "react";

const withList = (WrappedComponent, entity) => {
  return class extends Component {
    state = {
      data: [],
      term: ""
    };
    componentDidMount() {
      const fetchData = async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        const json = await res.json();
        this.setState({ ...this.state, data: json });
      };
      fetchData();
    }
    render() {
      let { data, term } = this.state;
      let filderedData = data.slice(0, 10).filter((d) => {
        if (entity === "Users") {
          const { name } = d;
          return name.toLowerCase().indexOf(term) >= 0;
        } else if (entity === "Todos") {
          const { title } = d;
          return title.toLowerCase().indexOf(term) >= 0;
        }
      });
      return (
        <div>
          <h2>{entity}</h2>
          <input
            type="text"
            value={term}
            onChange={(e) =>
              this.setState({ ...this.state, term: e.target.value })
            }
          />
          <WrappedComponent data={filderedData}></WrappedComponent>
        </div>
      );
    }
  };
};

export default withList;
