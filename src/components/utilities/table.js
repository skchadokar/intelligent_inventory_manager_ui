import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

export default function DataTable({ data, pagination, headers, globalSearch }) {

    const [rows, setRows] = useState(50);

    const [feedData, setData] = useState(data);

    useEffect(() => {
        setData(data);
    }, [data]);

    const defaultColDef = {
        editable: true,
        sortable: true,
        resizable: true,
        filter: true,
        flex: 1,
        minWidth: 50,
    };

    const onGridReady = params => {
        // console.log(this)
        // this.gridApi = params.api;
        // this.gridColumnApi = params.columnApi;

    };

    const handleSearch = (e) => {
        let search = e.target.value;
        let users = data;
        const filteredData = users.filter(item => {
            return Object.keys(item).some(key => {
                const regex = new RegExp(`${search.trim()}`, 'i');
                console.log()
                return regex.test(item[key]?.toString().toLowerCase());
            }
            );
        });
        setData(filteredData);
    }

    return (
        <span style={{ height: '100%' }}>
            {globalSearch ?
                <>
                    <div className="col-12 col-md-5 col-lg-3 mb-3" style={{ float: 'right' }}>
                        <input type="text" placeholder="Search" className="form-control" onChange={handleSearch} />
                    </div><br /><br /><br />
                </>
                : null}
            <div className="test-container">
                {/* <div className='row'>
                    <div className='col-6'>
                        Show &nbsp;
                        <select className='btn btn-sm' value={rows} onChange={(e) => setRows(Number(e.target.value))}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={6}>6</option>
                        </select>
                        &nbsp;Rows
                    </div>
                </div> */}

                <div id="myGrid" style={{ height: '520px', overflowX: 'scroll', }} className="myGrid ag-theme-alpine">
                    <AgGridReact
                        id='myGrid2'
                        // modules={AllModules}
                        columnDefs={headers}
                        defaultColDef={defaultColDef}
                        suppressRowClickSelection={true}
                        groupSelectsChildren={true}
                        debug={true}
                        rowSelection={'multiple'}
                        pagination={pagination ? true : false}
                        paginationPageSize={rows}
                        // onGridReady={onGridReady}
                        rowData={feedData}
                        domLayout={''}
                    />
                </div>
            </div>
        </span>
    );
}
