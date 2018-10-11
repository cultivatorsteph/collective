<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'E};Mx/5eHtoV^F+$~Dccbf2En~g;gkV,mevj+@?Juk|7E~s=WjHLp:c5BGLvy*}j');
define('SECURE_AUTH_KEY',  'oTbl+0+A,;fN$<5w9G~fS.g|@2.5Z,+vU`{j)ZlBmkHI{B_/U8(*C3h?Eq@qsUwL');
define('LOGGED_IN_KEY',    '8BFFs%dE;gQA]UMmk.69T8g!jF0PeitmFr$FZE*CaE9;o^w:0DxIS;^oat-C~zd^');
define('NONCE_KEY',        'Hcu(Jx/qQLQ/C+mq<kOQ(9J5O;JMDWi+XuYSNYeAx|Nz]q!y|7}L,aug!RT4ZT9E');
define('AUTH_SALT',        'AyDrrmfgmY{@H18i3RVOY}U-qzL6sE@uwFL/v!pF_wd+~.3y0G)s@lo#?u?_pb+3');
define('SECURE_AUTH_SALT', 'ygDM;O|C}|H4,h>Ss }q9l4,5ka1:v:T=;5S^Eg^pHl}9nt/~f}SQE.&*y>ODL).');
define('LOGGED_IN_SALT',   '+W02<#n+;lxhw~w9(t/%il8.0qPM,QE`:>qJ|DWr#94IU+$6;;]^%U6WORSJjM:l');
define('NONCE_SALT',       '14VHBO<eJJvu`e;=q<F(o%CE<cHnbF5>=<@:%x[`-@o?}k$*8:jvW3{|N?@23F_X');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
