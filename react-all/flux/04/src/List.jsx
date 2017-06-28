import React, { Component } from 'react';

function ListItem({ value }) {
    return (
        <li>
            <span>{ value }</span>
        </li>
    );
}

function ListTitle() {
    let title = this.props.title;

    return (
        <div title={ title }>{ title }</div>
    );
}

function List({ list, value }) {
    return (
        <div>
            <List Title={ title }>
        </div>
    );
}