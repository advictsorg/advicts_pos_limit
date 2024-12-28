# -*- coding: utf-8 -*-
###############################################################################
#
#    Cybrosys Technologies Pvt. Ltd.
#
#    Copyright (C) 2023-TODAY Cybrosys Technologies(<https://www.cybrosys.com>)
#    Author: Cybrosys Techno Solutions (odoo@cybrosys.com)
#
#    You can modify it under the terms of the GNU AFFERO
#    GENERAL PUBLIC LICENSE (AGPL v3), Version 3.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU AFFERO GENERAL PUBLIC LICENSE (AGPL v3) for more details.
#
#    You should have received a copy of the GNU AFFERO GENERAL PUBLIC LICENSE
#    (AGPL v3) along with this program.
#    If not, see <http://www.gnu.org/licenses/>.
#
###############################################################################
{
    'name': "Advicts POS Limit",
    'version': '17.0.1.0.0',
    'category': 'Point of Sale',
    'summary': "This module is used to limit The Access",
    'description': "This module is used to limit The Access",
    'author': "GhaithAhmed@Advicts",
    'website': "https://advicts.com",
    'depends': ['point_of_sale', 'hr', 'web', 'pos_hr', 'pos_discount', 'pos_restaurant'],
    'data': [
        'views/hr_employee_views.xml',
    ],
    'assets': {
        'point_of_sale._assets_pos': [
            'advicts_pos_limit/static/src/js/DiscountButton.js',
            'advicts_pos_limit/static/src/js/transfer_order_button.js',
            'advicts_pos_limit/static/src/js/ProductScreen.js',
        ],
    },
    'license': 'AGPL-3',
    'installable': True,
    'auto_install': False,
    'application': False,
}