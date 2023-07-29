/**
 * This file gives webpack opportunity to load/fetch everything
 * that is inside bootstrap before que container executes
 * to avoid dependency missing during the execution.
 * If bootstrap was loaded directly, an error will be thrown
 * related with 'products' is missing or something like that.
 */
import('./bootstrap');
