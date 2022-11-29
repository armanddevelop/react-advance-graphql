import React from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";
import data from "../../../api/db.json";

export const ListOfCategories = () => {
    //TODO remove this when connect to graphql
    const { categories } = data;
    return (
        <List>
            {categories.map(({ id, cover, name, emoji, path }) => (
                <Item key={id}>
                    <Category cover={cover} emoji={emoji} path={path} />
                </Item>
            ))}
        </List>
    );
};
