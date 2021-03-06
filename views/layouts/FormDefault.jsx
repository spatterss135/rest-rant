const React = require('react')


function Def (html) {
    return (
        <html>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
            <link rel="stylesheet"  type="text/css" href="/App.css" />
            <link rel="stylesheet"  type="text/css" href="/NewForm.css" />
            <head>
                <title>Title</title>
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li><a href='/places'>Places</a></li>
                        <li><a href='/places/new'>New Place</a></li>
                    </ul>
                </nav>
                {html.children}
                <div className="push"></div>
             </body>
             <script>

             </script>
             <footer className="footer">Footer</footer>
        </html>
    )

}


module.exports = Def;