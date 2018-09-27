import {Request,Response} from 'express'

/**
 * GET /
 * Home page.
 */
export let index=(req:Request, res:Response)=> {
    res.render('home', {
        title: 'Home',
        message: 'get the strap!'
    });
};