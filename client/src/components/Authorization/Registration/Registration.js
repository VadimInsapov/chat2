import React from 'react';
import Input from "../../UI/Input/Input";
import "./Registration.css";
import Link from "../../UI/Link/Link";
import Button from "../../UI/Button/Button";
import {GREEN_COLOR, ORANGE_COLOR, THICK_BLOCK} from "../../../utils/Constants";
import Block from "../../UI/Block/Block";

const Registration = () => {
    return (
        <Block className="h-100" isCentered={true}>
            <div className="width-block">
                <Block form={THICK_BLOCK}>
                    <h2 className="text-center">РЕГИСТРАЦИЯ</h2>
                    <Input
                        placeholder="Введите свой email..."
                        className="mt-3 mb-2"
                    />
                    <Input
                        placeholder="Введите свой пароль..."
                        className="mb-3"
                        type="password"
                    />
                    <Button color={GREEN_COLOR} stretch={true}>зарегистрироваться</Button>
                    <Link color={ORANGE_COLOR} stretch={true} className="mt-2 fs-5">авторизоваться</Link>
                </Block>
            </div>
        </Block>
    );
};

export default Registration;