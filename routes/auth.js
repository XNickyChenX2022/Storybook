const express = require('express')
const router = express.Router()
const passport = require('passport')

// @desc Auth with Google
// @route GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] })) 

// @desc Google auth callback
// @route Get /auth/google/callback
router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: '/'}), 
    (req, res) => {
        res.redirect('/dashboard')
    }
)

// @desc Logout user
// @router /auth/logout
router.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if(err) {return next(err);}
        res.redirect('/')
    });
});
module.exports = router