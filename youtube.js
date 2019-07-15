var youtubedl = require('youtube-dl');

module.exports = {

    getInfo: async function (id) {

        return new Promise((resolve, reject) => {

            var url = `http://www.youtube.com/watch?v=${id}`;

            youtubedl.getInfo(url, function (err, info) {
                console.log('url:', url);
                if (err) throw reject(err);

                // console.log('id:', info.id);
                // console.log('title:', info.title);
                console.log('url:', info.url);
                resolve(info.url)
                // console.log('thumbnail:', info.thumbnail);
                // console.log('description:', info.description);
                // console.log('filename:', info._filename);
                // console.log('format id:', info.format_id);
            });
        });
    }

}