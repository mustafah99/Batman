$(() => {
    $('#prevent').submit((e) => {
        e.preventDefault();
        const job = $('#searchInput').val();
        $('#results').html("");
        getRequest(job);
    });

    function getRequest(job) {
        const url = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=${job}`;
        $.getJSON(url, (response) => {
            showResult(response)
        });
    };

    function showResult(jobs) {
        $.each(jobs, (i, value) => {
            $('#results').append(`<h3>${value.type}</h3>
            <h3>${value.title}</h3>
            <h3>${value.created_at}</h3>
            <h3>${value.location}</h3>`);
        });
    };
});