import React from 'react';
import{useDispatch, useSelector, useStore} from 'react-redux';
import {useForm} from 'react-hook-form';
import {chooseName} from '../../redux/slices/rootSlice';
import {Input} from '../sharedComponents/Input';
import {Button} from '@material-ui/core';
import {server_calls} from '../../api';
import {useGetData} from '../../custom-hooks';

interface HeroFormProps {
    id?: string;
    data?: {}
}

interface HeroState {
    name: string;
    description: string;
}

export const HeroForm = (props:HeroFormProps) => {
    const dispatch = useDispatch();
    let {heroData, getData} = useGetData();
    const store = useStore()
    const name = useSelector<HeroState>(state => state.name)
    const {register, handleSubmit} = useForm({})

    const onSubmit = (data:any, event:any) => {
        if (props.id!){
            server_calls.update(props.id!, data)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            server_calls.create(store.getState())
            //window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Hero Name</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name="description" placeholder="Description"/>
                </div>
                <div>
                    <label htmlFor="comics_appeared_in"># of Comic Appearances</label>
                    <Input {...register('comics_appeared_in')} name="comics_appeared_in" placeholder="# of Comic Appearances"/>
                </div>
                <div>
                    <label htmlFor="super_power">Super Power</label>
                    <Input {...register('super_power')} name="super_power" placeholder="Super Power"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}