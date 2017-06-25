$(function() {
  /* ������������ �������� ����� */
  $('.search-form').submit(function() {
    var errVal = '������ ������';
    /* ���� ���� ������ ��� �������� �������� errVal */
    if($('.search').val() == '' || $('.search').val() == errVal) {
      /* �������� � ���� �������� errVal, �������� ���� ���� � */
      $('.search').val(errVal).css({backgroundColor: 'rgba(0,0,0,.1)'});
      /* ���������� false - ����� �� ������������ */
      return false;
    };
  });
  /* ��� ������ �� ���� */
  $('.search').focus(function() {
    /* ��������� ������ �������� ����, ������ ���� ���� � ����������� */
    $(this).val('').css({backgroundColor: '#d8e6ef'});
    /* �������� ����������� ��������� */
    $('.notice').fadeIn(400);
  });
  /* ��� ������ ������ */
  $('.search').blur(function() {
    /* ������ ����������� ��������� */
    $('.notice').fadeOut(400);
  });
});