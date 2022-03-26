import React from 'react';

function MainCard(props) {
    return (
        <div className="container mt-5 pt-5">
            <table className="table table-bordered table-hover table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Описание</th>
                    <th scope="col">Заказчик</th>
                    <th scope="col">Статус</th>
                    <th scope="col">Офис</th>
                    <th scope="col">Департамент</th>
                    <th scope="col">Последнне изменение в</th>
                    <th scope="col">Перейти</th>
                </tr>
                </thead>
                <tbody id="table">

                </tbody>
            </table>

        </div>
    );
}

export default MainCard;